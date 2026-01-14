'use client'

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/app/store";


export const WidgetsGrid = () => {

    const contador = useAppSelector(state => state.counter.count)

    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget title={ contador.toString() }
            subtitle="Productos agregados"
            href=""
            label="Contador"
            icon={<IoCartOutline size={70} className="text-blue-600"></IoCartOutline>}>
            </SimpleWidget>
        </div>
    )
}
