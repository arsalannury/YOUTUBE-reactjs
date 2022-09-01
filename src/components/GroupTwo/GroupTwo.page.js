import { useGroupTwoDatas } from "../../Hooks/GroupTwoDetail";
import { CircularProgress } from "@mui/material";

const GroupTwoPage = ({ groupTwoIds }) => {
  const [four, five, six] = useGroupTwoDatas(groupTwoIds);

  if (four.isLoading || five.isLoading || six.isLoading) {
    return <CircularProgress />;
  }

  if (four.isError || five.isError || six.isError) {
    return (
      <>
        <h2>{four.error}</h2>
        <CircularProgress />
      </>
    );
  }

  return (
    <>
    <img src={four.data?.data.data.avatar} alt="four-img" />
    <img src={five.data?.data.data.avatar} alt="five-img" />
    <img src={six.data?.data.data.avatar} alt="six-img" />
    </>
  )
};

export default GroupTwoPage;
