import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { routes } from "~/router/routes";

export function useObserveParam(
  param: string,
  triggerLength: number,
  field?: string
) {
  const history = useHistory();

  useEffect(() => {
    if (field?.length == triggerLength) {
      const observedParam = new URLSearchParams();
      observedParam.set(param, field);

      history.push(`${routes.dashboard}?${observedParam.toString()}`);
    }
  }, [field, history, param, triggerLength]);
}
