import { MY_URL } from "../injection-tokens";

export const MY_URL_PROVIDER = {
    provide: MY_URL,
    useValue: 'http://localhost:9999'
};