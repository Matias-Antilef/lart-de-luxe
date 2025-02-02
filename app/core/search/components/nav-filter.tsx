import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FilterForm {
  name?: string;
  priceMin: number;
  priceMax: number;
  category?: string;
  orderBy?:
    | "orderDefault"
    | "orderByHPrice"
    | "orderByLPrice"
    | "orderByNameAz"
    | "orderByNameZa";
}

function NavFilter({ handleFilters }: { handleFilters: any }) {
  const [priceMin, setPriceMin] = useState<number>(0);
  const [priceMax, setPriceMax] = useState<number>(3000);
  const { register, handleSubmit, setValue, watch } = useForm<FilterForm>({
    defaultValues: {
      name: "",
      priceMin: 0,
      priceMax: 3000,
      category: "",
      orderBy: "orderDefault",
    },
  });

  function onSubmit(data: FilterForm) {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== undefined && value !== ""
      )
    );

    handleFilters(filteredData);
  }

  return (
    <Sheet>
      <Input
        {...register("name")}
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit(watch());
          }
        }}
        placeholder="Ingresar nombre de producto"
        className="py-6 px-10 rounded-full border-neutral-800 text-black"
      />
      <SheetTrigger className="flex gap-2 border-[1px] rounded-xl p-2 px-3 border-black ">
        <div>
          <SlidersHorizontal />
          Agregar filtros
        </div>
      </SheetTrigger>
      <SheetContent className="mt-[55px]">
        <SheetHeader>
          <SheetTitle>Filtrar productos</SheetTitle>
          <SheetDescription>
            <form
              className="flex flex-col gap-10"
              onSubmit={handleSubmit(onSubmit)}
            >
              <section className="flex flex-col gap-2">
                <div className="flex items-center gap-2 ">
                  <span>Precio mínimo:</span>
                  <input
                    {...register("priceMin")}
                    type="number"
                    min={0}
                    max={3000}
                    value={priceMin}
                    onChange={(e) => setPriceMin(Number(e.target.value))}
                    className="border p-1 w-[80px]"
                  />
                </div>
                {/* <Slider
                  defaultValue={[priceMin]}
                  max={3000}
                  step={10}
                  className="max-w-[200px]"
                  value={[priceMin]}
                  onValueChange={(value) => setPriceMin(value[0])}
                /> */}
              </section>

              <section className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span>Precio máximo</span>
                  <input
                    {...register("priceMax")}
                    type="number"
                    min={0}
                    max={3000}
                    value={priceMax}
                    onChange={(e) => setPriceMax(Number(e.target.value))}
                    className="border p-1 w-[80px]"
                  />
                </div>
                {/* <Slider
                  max={3000}
                  step={10}
                  className="max-w-[200px]"
                  value={[priceMax]}
                  onValueChange={(value) => setPriceMax(value[0])}
                /> */}
              </section>

              <Select
                onValueChange={(value) => setValue("category", value)}
                value={watch("category") || ""}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filtrar categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Todo</SelectLabel>
                    <SelectItem value="bolsas">Bolsas</SelectItem>
                    <SelectItem value="remeras">Remeras</SelectItem>
                    <SelectItem value="zapatos">Zapatos</SelectItem>
                    <SelectItem value="polerones">Polerones</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <RadioGroup
                value={watch("orderBy") || "orderDefault"}
                onValueChange={(value) =>
                  setValue("orderBy", value as FilterForm["orderBy"])
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="orderDefault" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="orderByHPrice" id="r2" />
                  <Label htmlFor="r2">orderByHPrice</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="orderByLPrice" id="r3" />
                  <Label htmlFor="r3">orderByLPrice</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="orderByNameAz" id="r4" />
                  <Label htmlFor="r4">orderByNameAz</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="orderByNameZa" id="r5" />
                  <Label htmlFor="r5">orderByNameZa</Label>
                </div>
              </RadioGroup>

              <Button type="submit">Aplicar filtros</Button>
            </form>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default NavFilter;
