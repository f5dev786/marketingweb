
import { useEffect, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
    "pk_live_51QfZo3KCrHxXCFbB5eeCgrJyNfQlhiu7m6VfVpxbq06bpPqAqT3dnFxfInaeCfCVQeaF29YhKyvJ01gjVlA8OI7M00CnVZH2n7"
);
function CheckOut() {
    const searchParams = useSearchParams();

    const token = searchParams.get("token");
    const checkoutRef = useRef(null);
    const checkoutInstance = useRef(null);
    useEffect(() => {
        const initializeCheckout = async () => {
            if (!token || checkoutInstance.current) return; // ✅ prevent multiple

            const stripe = await stripePromise;
            try {
                const checkout = await stripe.initEmbeddedCheckout({
                    clientSecret: token,
                });

                checkoutInstance.current = checkout; // ✅ save instance
                checkout.mount(checkoutRef.current);
            } catch (error) {
                console.error("Error initializing embedded checkout:", error);
            }
        };
        setTimeout(() => {
            initializeCheckout();
        }, 200);

        // ✅ cleanup when component unmounts
        return () => {
            if (checkoutInstance.current) {
                checkoutInstance.current.destroy();
                checkoutInstance.current = null;
            }
        };
    }, [token]);

    return <div className="min-h-screen w-full bg-white flex flex-col pt-11"><div id="checkout" ref={checkoutRef} ></div></div>;
}

export default CheckOut