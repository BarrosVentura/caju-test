function createCpfMask(value?: string) {
  if (!value) return undefined;
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

function removeCpfMask(value?: string) {
  if (!value) return undefined;
  return value.replace(/\.|-/gm, "").trim();
}

export const cpfMask = {
  create: createCpfMask,
  remove: removeCpfMask,
};
