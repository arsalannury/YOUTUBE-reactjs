import FireBaseInstance from "../../Axios/FireBaseInstance";
import { useQuery } from "react-query";

const fetchUser = () => {
  return FireBaseInstance.get("users.json");
};

const fetchPersonalInf = (personalKey) => {
  return FireBaseInstance.get(`${personalKey}.json`);
};

const DependentPage = () => {
  const { data: userData, isLoading } = useQuery("user-key", fetchUser, {
    cacheTime: 50000,
  });
  const personalKey = userData?.data[0].personalKey;

  const { data: personalInf, isLoading: isLoadingInf } = useQuery(
    "inf-key",
    () => fetchPersonalInf(personalKey),
    { enabled: !!personalKey }
  );
  console.log(personalInf);
  return (
    <>
    <div>
        <p>{personalInf?.data.phoneNumber}</p>
        <p>{personalInf?.data.address}</p>
        <p></p>
    </div>
    </>
  )
};

export default DependentPage;
