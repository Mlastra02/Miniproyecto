import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, event, date, time } = req.body;

        // Validar que todos los campos existan
        if (!name || !email || !event || !date || !time) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        // Ruta del archivo Excel en la carpeta del proyecto
        const filePath = path.resolve('./public', 'inscripciones.xlsx');
        console.log('Guardando archivo en la ruta:', filePath);  // Verificar la ubicación del archivo

        // Crear workbook y leer o crear archivo
        const workbook = new ExcelJS.Workbook();

        try {
            console.log('Leyendo o creando el archivo Excel');

            // Verificar si el archivo existe
            if (fs.existsSync(filePath)) {
                // Leer el archivo si ya existe
                await workbook.xlsx.readFile(filePath);
                console.log('Archivo Excel encontrado y leído.');
            } else {
                // Si el archivo no existe, crear una nueva hoja de cálculo
                console.log('Archivo Excel no encontrado. Creando uno nuevo.');
                const worksheet = workbook.addWorksheet('Inscripciones');
                worksheet.columns = [
                    { header: 'Nombre', key: 'name', width: 30 },
                    { header: 'Email', key: 'email', width: 30 },
                    { header: 'Evento', key: 'event', width: 20 },
                    { header: 'Fecha', key: 'date', width: 15 },
                    { header: 'Hora', key: 'time', width: 10 },
                ];
                console.log('Nueva hoja de cálculo creada.');
            }

            // Obtener la hoja de trabajo 'Inscripciones' o crearla si no existe
            let worksheet = workbook.getWorksheet('Inscripciones');
            if (!worksheet) {
                console.log('Hoja "Inscripciones" no encontrada. Creando una nueva.');
                worksheet = workbook.addWorksheet('Inscripciones');
                worksheet.columns = [
                    { header: 'Nombre', key: 'name', width: 30 },
                    { header: 'Email', key: 'email', width: 30 },
                    { header: 'Evento', key: 'event', width: 20 },
                    { header: 'Fecha', key: 'date', width: 15 },
                    { header: 'Hora', key: 'time', width: 10 },
                ];
            }

            // Agregar nueva fila con los datos del formulario explícitamente
            const newRow = worksheet.addRow([name, email, event, date, time]);
            console.log('Nueva fila agregada:', newRow.values);

            // Guardar el archivo Excel después de agregar la nueva fila
            await workbook.xlsx.writeFile(filePath);
            console.log('Inscripción guardada correctamente en el archivo Excel.');

            // Leer nuevamente para verificar que se guardó
            const updatedWorkbook = new ExcelJS.Workbook();
            await updatedWorkbook.xlsx.readFile(filePath);
            const updatedWorksheet = updatedWorkbook.getWorksheet('Inscripciones');
            console.log('Número de filas después de agregar:', updatedWorksheet.rowCount);

            // Responder con éxito
            res.status(200).json({ message: 'Inscripción guardada correctamente' });
        } catch (error) {
            console.error('Error al guardar la inscripción:', error);
            res.status(500).json({ message: 'Error al guardar la inscripción' });
        }
    } else {
        // Si no es una solicitud POST, responder con un método no permitido
        res.status(405).json({ message: 'Método no permitido' });
    }
}
