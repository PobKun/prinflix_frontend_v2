import { z } from "zod";

const LoginvalidationSchema = z.object({
    email: z.string().min(1, { message: "This field is required" }).email({
        message:  "This field must be a valid email address",
    }),
    password: z.string().min(8, { message: "This field must be at least 8 characters" }).max(100, { message: "This field must be not longer than 100 characters" }),
})
type LoginTypeValidationSchema = z.infer<typeof LoginvalidationSchema>;
export { LoginvalidationSchema };
export type { LoginTypeValidationSchema };


const RegistervalidationSchema = z.object({
    name: z.string().min(2, { message: "This field must be at least 2 characters" }).max(200, { message: "This field must be not longer than 200 characters" }),
    email: z.string().min(1, { message: "This field is required" }).email({
        message: "This field must be a valid email address",
    }),
    password: z.string().min(8, { message: "This field must be at least 8 characters" }).max(100, { message: "This field must be not longer than 100 characters" }),
    confirmPassword: z.string().min(8, { message: "This field must be at least 8 characters" }).max(100, { message: "This field must be not longer than 100 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Confirm password doesn't match password",
});
type RegisterTypeValidationSchema = z.infer<typeof RegistervalidationSchema>;
export { RegistervalidationSchema };
export type { RegisterTypeValidationSchema };


const ForgotvalidationSchema = z.object({
    email: z.string().min(1, { message: "This field is required" }).email({
        message: "This field must be a valid email address",
    }),
});
type ForgotTypeValidationSchema = z.infer<typeof ForgotvalidationSchema>;
export { ForgotvalidationSchema };
export type { ForgotTypeValidationSchema };


const ResetvalidationSchema = z.object({
    password: z.string().min(8, { message: "This field must be at least 8 characters" }).max(100, { message: "This field must be not longer than 100 characters" }),
    confirmPassword: z.string().min(8, { message: "This field must be at least 8 characters" }).max(100, { message: "This field must be not longer than 100 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Confirm password doesn't match password",
});
type ResetTypeValidationSchema = z.infer<typeof ResetvalidationSchema>;
export { ResetvalidationSchema };
export type { ResetTypeValidationSchema };


const ChangePasswordvalidationSchema = z.object({
    currentPassword: z.string().min(8, { message: "This field must be at least 8 characters" }).max(100, { message: "This field must be not longer than 100 characters" }),
    password: z.string().min(8, { message: "This field must be at least 8 characters" }).max(100, { message: "This field must be not longer than 100 characters" }),
    confirmPassword: z.string().min(8, { message: "This field must be at least 8 characters" }).max(100, { message: "This field must be not longer than 100 characters" }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Confirm password doesn't match password",
});
type ChangePasswordTypeValidationSchema = z.infer<typeof ChangePasswordvalidationSchema>;
export { ChangePasswordvalidationSchema };
export type { ChangePasswordTypeValidationSchema };


const ChangeProfilevalidationSchema = z.object({
    name: z.string().min(2, { message: "This field must be at least 2 characters" }).max(200, { message: "This field must be not longer than 200 characters" }),
});
type ChangeProfileTypeValidationSchema = z.infer<typeof ChangeProfilevalidationSchema>;
export { ChangeProfilevalidationSchema };
export type { ChangeProfileTypeValidationSchema };