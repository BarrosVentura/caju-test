import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { routes } from "~/router/routes";

export function useObserveParam(field: string, param: string) {
  const history = useHistory();

  useEffect(() => {
    if (field?.length == 11) {
      const observedParam = new URLSearchParams();
      observedParam.set(param, field);

      history.push(`${routes.dashboard}?${observedParam.toString()}`);
    }
  }, [field, history, param]);
}
