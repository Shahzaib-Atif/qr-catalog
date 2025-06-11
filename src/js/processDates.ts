import dayjs from "dayjs";

export default function processDates(data: any[]) {
  return data.map((val) => {
    const { DataEntrega, DataProducao } = val;
    let newDataEntrega, newDataProducao;

    // process DataEntrega first
    if (!DataEntrega) newDataEntrega = null;
    else newDataEntrega = dayjs(DataEntrega).format("YYYY/MM/DD");

    // process DataProducao
    if (!DataProducao) newDataProducao = null;
    else newDataProducao = dayjs(DataProducao).format("YYYY/MM/DD");

    return {
      ...val,
      DataEntrega: newDataEntrega,
      DataProducao: newDataProducao,
    };
  });
}
