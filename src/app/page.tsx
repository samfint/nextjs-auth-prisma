import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <h1>HomePage</h1>
      <div>
        <Button>este es un boton</Button>
      </div>
      <Input type="email" placeholder="email" />
    </div>
  );
}

export default HomePage;
