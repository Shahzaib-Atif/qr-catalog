export type Product = {
    id: string;
    slug: string;
    name: string;
    description: string;
    image_url: string;
}

export type ActionResponse = {
    data: any;
    error: string
}