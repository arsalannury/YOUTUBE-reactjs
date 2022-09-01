import { useGroupOneDatas } from "../../Hooks/GroupOneDetail"


const GroupOnePage = ({groupOneIds}) => {

    const [FT_OBJ,SD_OBJ,TD_OBJ] = useGroupOneDatas(groupOneIds);
    
    if(FT_OBJ.isLoading || SD_OBJ.isLoading || TD_OBJ.isLoading) {
        return <h2>data is loading ...</h2>
    }

    if(FT_OBJ.isError || SD_OBJ.isError || TD_OBJ.isError) {
        return <h2>{FT_OBJ.error.message}</h2>
    }
     
  return (
    <>
     <div>
     <img alt="user-one-image" src={FT_OBJ.data?.data.data.avatar} />
     <img alt="user-one-image" src={SD_OBJ.data?.data.data.avatar} />
     <img alt="user-one-image" src={TD_OBJ.data?.data.data.avatar} />
     </div>
    </>
  )
}

export default GroupOnePage