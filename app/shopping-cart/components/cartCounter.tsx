'use client'

import { useAppSelector } from "@/app/store";
import { addOne, initCounterState, resetCount, substractOne } from "@/app/store/counter/counterSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
    value?: number
}

export const CartCounter = ({value = 0}:Props) => {

    const count = useAppSelector(p => p.counter.count);
    const dispatch = useDispatch();

    //const [count, setCount] = useState(value);
    useEffect(() => {
        dispatch(initCounterState(value))
    });
    
    return (
        <>
                <span className="text-9xl">{count}</span>

                <div className="flex">
                    <button onClick={() => dispatch(addOne())} 
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2">
                    +1
                    </button>
                    <button  onClick={() => dispatch(substractOne())} 
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2">
                    -1
                    </button>
                </div>
        </>
    )
}
