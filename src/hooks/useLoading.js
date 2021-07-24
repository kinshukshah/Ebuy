import { useState } from "react";
import Loading from "../components/loading/loading.component";
export const useLoading = () => {
  const [loading, setLoading] = useState(false);

  return [
    loading ? <Loading /> : null,
    () => setLoading(false),
    () => setLoading(true),
  ];
};
