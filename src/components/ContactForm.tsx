import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
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

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const form = useForm<ContactFormData>({
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

  function onSubmit(data: ContactFormData) {
    console.log('Dados do formulário:', data);
  }

  return (
    <section className="flex w-full justify-center bg-[#f9f9f9] px-4 py-12">
      <div className="w-full max-w-4xl">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full border border-red-700 px-4 py-1 text-sm font-medium text-red-700">
            Entrem em contato
          </span>
          <h2 className="mb-2 mt-4 text-2xl font-bold md:text-4xl">
            ENTRE EM CONTATO COM A PSI PREVINCÊNDIO
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Precisa de um orçamento ou tem dúvidas sobre nossos serviços?
            <br />
            Nossa equipe está pronta para atender você.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Seu nome" className="h-12 w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Nome da empresa</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Empresa (opcional)" className="h-12 w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="document"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>CNPJ/CPF</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite o CNPJ ou CPF" className="h-12 w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="seu@email.com"
                      className="h-12 w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="(41) 9 9743-0276" className="h-12 w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Assunto</FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      rows={4}
                      placeholder="Descreva aqui sua necessidade ou dúvida"
                      className="w-full resize-none rounded-md border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-2 mt-8">
              <Button
                type="submit"
                className="w-full rounded-md bg-red-700 py-3 font-semibold text-white transition-all hover:bg-red-800"
              >
                Enviar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
