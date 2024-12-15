import { z } from "zod";

export const createTasksSchema = z.object({
    title: z.string({
        required_error: 'El titulo es requerido',
    }).min(1, {
        message: 'El titulo debe tener minimo un caracter'
    }),
    description: z.string({
        required_error: 'La descripcion es requerida'
    }).min(1, {
        message: 'La descripcion debe tener minimo un caracter'
    }),
    date: z.string().date().optional(),
});