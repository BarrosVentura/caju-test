function createCpfMask(value?: string) {
  if (!value) return "";
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

function removeCpfMask(value?: string) {
  if (!value) return "";
  return value.replace(/\.|-/gm, "").trim();
}

function isValidCpf(value?: string) {
  if (!value) return false;
  const cleanCPF = cpf.removeMask(value) as string;
  let sum = 0;
  let rest;
  if (cleanCPF == "00000000000") return false;

  for (let index = 1; index <= 9; index++) {
    sum = sum + parseInt(cleanCPF.substring(index - 1, index)) * (11 - index);
  }

  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;

  if (rest != parseInt(cleanCPF.substring(9, 10))) return false;

  sum = 0;

  for (let index = 1; index <= 10; index++) {
    sum = sum + parseInt(cleanCPF.substring(index - 1, index)) * (12 - index);
  }

  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;

  if (rest != parseInt(cleanCPF.substring(10, 11))) return false;

  return true;
}

function getCpfFromUrl(locationSearch: string) {
  return new URLSearchParams(locationSearch).get("cpf") ?? "";
}

export const cpf = {
  createMask: createCpfMask,
  removeMask: removeCpfMask,
  validate: isValidCpf,
  getFromURL: getCpfFromUrl,
};
