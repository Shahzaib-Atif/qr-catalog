// types/dtos/user.dto.ts
import { z } from 'zod';

export const GetUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  isAdmin: z.boolean().default(false),
});

export type GetUserDTO = z.infer<typeof GetUserSchema>;
