import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/ContactForm.tsx
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const contactSchema = z.object({
    name: z.string().min(2, 'Nome muito curto'),
    company: z.string().optional(),
    document: z.string().min(5, 'CNPJ/CPF inválido'),
    email: z.string().email('Email inválido'),
    phone: z.string().min(8, 'Telefone inválido'),
    message: z.string().min(10, 'Mensagem muito curta')
});
export function ContactForm() {
    const form = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            company: '',
            document: '',
            email: '',
            phone: '',
            message: ''
        }
    });
    function onSubmit(data) {
        console.log('Dados do formulário:', data);
        // Aqui você pode enviar os dados para sua API ou outro serviço
    }
    return (_jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", children: [_jsx(FormField, { control: form.control, name: "name", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Nome" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "Seu nome", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "company", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Nome da empresa" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "Empresa (opcional)", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "document", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "CNPJ/CPF" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "Digite o CNPJ ou CPF", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "email", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "E-mail" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "seu@email.com", type: "email", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "phone", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Telefone" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "(41) 9 9999-9999", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "message", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Assunto" }), _jsx(FormControl, { children: _jsx("textarea", { className: "w-full rounded-md border px-3 py-2", rows: 4, placeholder: "Descreva aqui", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(Button, { type: "submit", className: "w-full", children: "Enviar" })] }) }));
}
