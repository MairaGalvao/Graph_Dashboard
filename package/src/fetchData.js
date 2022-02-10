import data from './response.json';
export async function fetchData({

  services = [],
  regions = [],
  fromDate = new Date(new Date().getTime() - 300 * 24 * 60 * 60000).getTime(),
  toDate = new Date().getTime()
} = {}) {
  console.log(fromDate)
  console.log(toDate)
  if (!fromDate || !toDate) throw new Error('must pass from and to');
  return new Promise(resolve => {
    setTimeout(() => {

      const res = data.filter(item => {
        if (services.length > 0 && !services.includes(item['cloud_service'])) return false;
        if (regions.length > 0 && !regions.includes(item['region'])) return false;
        if (fromDate > item.time || toDate < item.time) return false;
        return true;

        
      })

      resolve(res);
    }, 500);
  })
}

