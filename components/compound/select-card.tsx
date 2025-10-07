import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Pressable } from "react-native";
import { Text } from "../ui/text";

export function SelectCard({ title, image, active, on_press, alt_image }: { title: string, image: ReactNode, active: boolean, on_press: () => void, alt_image: ReactNode }) {
    return (
        <Pressable onPress={on_press} className={cn("flex-1  h-[185px] rounded-[16%]  items-start justify-between px-5 pt-5 pb-3", active ? "bg-rd_main" : "bg-[#F2F2F2]")}>
            <Text className={cn("text-[22px] font-regular text-[#484848]", active && "text-white")}>
                {title}
            </Text>
            {active ? alt_image : image}
        </Pressable>
    )
}