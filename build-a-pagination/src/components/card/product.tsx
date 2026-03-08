import { Card } from "../ui/card"

function ProductCard({item}) {
    return (<Card className="p-4">{item?.title}</Card>)
}

export {
    ProductCard
}