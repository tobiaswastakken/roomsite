import { useRouter } from "next/router";
import Compras from "@/src/compras/Compras";
import { z } from "zod";
import { Alert } from "@mui/material";
import { plans } from "../planes";

const schema = z.object({
  id: z.coerce.number().min(0).max(2),
});

const plan = () => {
  const router = useRouter();
  const query = schema.safeParse(router.query);

  if (!query.success) {
    return <Alert severity="error">Error: plan equivocado</Alert>;
  }

  const id = query.data.id;
  const item = plans[id];

  return (
    <Compras
      title={item.title}
      description={item.description}
      price={item.price}
    />
  );
};

export default plan;
