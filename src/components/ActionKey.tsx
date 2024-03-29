import {Chip, Kbd} from "@nextui-org/react";
import React from "react";

interface Props {
    action: string;
    keyToPress: string;
}

export const ActionKey: React.FC<Props> = ({ action, keyToPress }) => {
    return (
        <Chip size="lg" variant="flat" className="text-gray-500 text-sm">
                        <span className="font-bold">
                            {action} &nbsp;
                        </span>
            <Kbd className="text-gray-500 font-bold">{keyToPress}</Kbd>
        </Chip>
    );
};
