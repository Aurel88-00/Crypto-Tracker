export function transformNumberWithCommas(dataNumber: number): string {
    return dataNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }