
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TiArrowRight } from 'react-icons/ti'
import { useRef } from 'react'

function CardComponent() {
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full h-screen flex items-center justify-center ">
        <Card className="w-96 font-sans flex flex-col gap-4 items-start rounded-2xl" ref={step1Ref}>
        <CardHeader>
          <p className="text-sm text-gray-500 flex justify-self-center -mb-2 -mr-1">Step 1</p>
          <CardTitle className="text-2xl font-bold">Add Mail</CardTitle>
          <CardDescription className="text-xs -ml-5"></CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 w-full -mt-4">
          <div className="flex gap-2 items-center">
            <p className="text-sm text-gray-500">From</p>
            <Input />
          </div>
          <div className="flex gap-6 items-center ">
            <p className="text-sm text-gray-500 flex ">To</p>
            <Input />
          </div>
        </CardContent>
        <CardFooter className="w-full flex -mt-7 justify-end">
          <Button className="group" onClick={() => {
            step1Ref.current?.classList.add('hidden');
            step2Ref.current?.classList.remove('hidden');
            step2Ref.current?.classList.add('flex');
          }}>Next<TiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" /></Button>
        </CardFooter>
      </Card>




      <Card className="w-96 font-sans flex-col gap-4 items-start rounded-2xl hidden" ref={step2Ref}>
        <CardHeader>
          <p className="text-sm text-gray-500 flex justify-self-center -mb-2 -mr-1">Step 2</p>
          <CardTitle className="text-2xl font-bold">Create Mail</CardTitle>
          <CardDescription className="text-xs -ml-5"></CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 w-full -mt-4">
          <div className="flex gap-2 items-center">
            <p className="text-sm text-gray-500">From</p>
            <Input />
          </div>
          <div className="flex gap-6 items-center ">
            <p className="text-sm text-gray-500 flex ">To</p>
            <Input />
          </div>
        </CardContent>
        <CardFooter className="w-full flex -mt-7 justify-end">
          <Button className="group">Next<TiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" /></Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardComponent
