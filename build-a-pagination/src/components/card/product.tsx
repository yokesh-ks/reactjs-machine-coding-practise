import { Card, CardTitle } from "../ui/card"

interface ProductCardProps {
    item: {
        title: string;
        images: string[]
    }
}

function ProductCard({ item }: ProductCardProps) {
    return (<Card className="p-4">
        <img src={item?.images?.[0]} />
        <CardTitle>{item?.title}</CardTitle>
    </Card>)
}

export {
    ProductCard
}