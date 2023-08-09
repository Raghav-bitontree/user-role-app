export const getRolesForSelect = (data: any) => {
  let roleData: any = [];
  data?.map((item: any) => {
    roleData.push({
      value: item?.values?.roleKey,
      label: item?.values?.roleLabel,
    });
    return item;
  });
  return roleData;
};
