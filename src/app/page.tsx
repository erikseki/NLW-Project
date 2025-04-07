import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { Input } from "@/components/input";
import { ArrowRight, Copy } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* <div className="text-white">Hello world!</div>

      <h1 className="text-4xl font-semibold font-heading">Hello World</h1>
      
      <Button text="Erik" />
      <Button text="Seki" />
      <Button text="" /> */}

        <Button type="submit">
            Enviar
          <ArrowRight />
        </Button>

        <IconButton>
          <Copy />
        </IconButton>

        <div>
          <Input type="email" placeholder="Digite seu e-mail"/>
        </div>
    </main>
  );
}
