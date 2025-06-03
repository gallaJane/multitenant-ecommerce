import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant="elevated">I am Button</Button>
        </div>
        <div>
          <Input placeholder="I'm an Input" />
        </div>
      </div>
    </div>
  );
}
