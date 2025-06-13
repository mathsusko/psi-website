import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Certificações e Conformidade</AccordionTrigger>
        <AccordionContent>
          Nossa atuação segue rigorosamente as normas técnicas exigidas pelos órgãos reguladores,
          como o Corpo de Bombeiros, ABNT e demais legislações vigentes. Contamos com certificações
          que garantem a qualidade dos nossos serviços e asseguram que cada projeto entregue esteja
          em total conformidade com os padrões de segurança exigidos por lei. Confiança,
          transparência e responsabilidade técnica em cada detalhe.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Experiência e Credibilidade</AccordionTrigger>
        <AccordionContent>
          Com anos de atuação no setor de segurança contra incêndio e instalações hidráulicas,
          acumulamos um portfólio sólido de projetos executados com excelência. Atendemos empresas
          de diversos segmentos, sempre com foco na eficiência, segurança e durabilidade das
          soluções. Nossa credibilidade é construída diariamente com base em entregas responsáveis,
          equipe qualificada e comprometimento com cada cliente.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Atendimento Personalizado</AccordionTrigger>
        <AccordionContent>
          Cada empresa possui necessidades específicas quando o assunto é segurança contra incêndio.
          Por isso, oferecemos um atendimento consultivo e personalizado, desde o primeiro contato
          até a finalização do projeto. Nossa equipe técnica analisa as particularidades de cada
          ambiente e propõe soluções sob medida, garantindo eficiência, economia e total
          conformidade com as normas vigentes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Tecnologia de Ponta</AccordionTrigger>
        <AccordionContent>
          Trabalhamos com os sistemas e equipamentos mais modernos do mercado para garantir máxima
          eficiência na prevenção e combate a incêndios. Utilizamos tecnologias atualizadas em
          detecção, alarme, supressão e instalações hidráulicas, sempre alinhadas às normas técnicas
          e inovações do setor. Investir em tecnologia é o que nos permite oferecer mais segurança,
          agilidade e precisão em cada projeto.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Execução Eficiente</AccordionTrigger>
        <AccordionContent>
          Aliamos planejamento técnico e mão de obra especializada para garantir uma execução ágil,
          segura e sem surpresas. Do projeto à entrega final, seguimos cronogramas rigorosos e boas
          práticas de instalação, minimizando impactos na operação do cliente. Nosso compromisso é
          entregar soluções completas em segurança contra incêndio com eficiência e
          responsabilidade.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
