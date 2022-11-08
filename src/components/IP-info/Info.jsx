function Info({ ipData }) {
  const ip = ipData.ip;
  const isp = ipData.isp;
  const { region, city, postalCode, timezone } = ipData.location ? ipData.location : "";

  return (
    <div className="w-4/5 bg-white flex p-5 text-center rounded-2xl justify-around tablet:w-72 tablet:flex-col tablet:gap-5">
      <div>
        <p>IP address</p>
        <h2>{ip}</h2>
      </div>
      <div>
        <p>Location</p>
        <h2>{region}, {city} {postalCode}</h2>
      </div>
      <div>
        <p>Timezone</p>
        <h2>UTC{timezone}</h2>
      </div>
      <div>
        <p>isp</p>
        <h2>{isp}</h2>
      </div>
    </div>
  );
}

export default Info;