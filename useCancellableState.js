import { useState } from "react";

export const useSetStateBackup = (initialValue) => {
    const [backUp, setBackUp] = useState([initialValue]);
    const [data, setData] = useState(initialValue);

    return [
        data,
        (newData) => {
            let newBackUp = backUp;

            newBackUp.push(newData);
            setBackUp(newBackUp);
            setData(newData);
        },
        () => {
            if (backUp[backUp.length - 1]) {
                backUp.pop();
                setData(backUp[backUp.length - 1]);
            } else console.log("Can't go back on undefined state.");
        },
        () => setBackUp([]),
    ];
};
