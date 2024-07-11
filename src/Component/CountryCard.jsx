import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CountryCard = (props) => {
  return (
    <Card>
      <CardHeader>
        <img src={props.flag} alt="" className="w-60 h-40" />
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>
          <span className="font-bold">population:</span> {props.population}
        </CardDescription>
        <CardDescription>
          <span className="font-bold">area:</span>
          {props.area} km²
        </CardDescription>
        <CardDescription>
          <span className="font-bold">Capital:</span>
          {props.capital}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
export default CountryCard;
