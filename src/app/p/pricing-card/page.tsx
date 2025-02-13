import PricingCard from "@/app/components/PricingCard";

export default function PricingCardDemo() {
    return <div className="container-center">
        <PricingCard planTitle="Basic" planDescription="Create interactive forms that connect to your workflow" price={["24", "242"]} isMonthly={true}/*can change dynamically */ features={["100 responses/mo included", "1 user", "Unlimited forms", "Unlimited questions"]} seeAllFeatureLink="/basic-features" />
    </div>
}