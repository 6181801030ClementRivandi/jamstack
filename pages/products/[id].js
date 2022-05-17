import { useRouter } from "next/router";

export default function ProductsDetail() {
    const router = useRouter();
    const {id} = router.query;
    return (
        <>
            <p>Products Detail | {id}</p>
        </>
    );
}   