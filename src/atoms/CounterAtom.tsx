import { atom, RecoilState } from "recoil"

export const counterState: RecoilState<number> = atom<number>({
    key: "counterkey",
    default: 0
})