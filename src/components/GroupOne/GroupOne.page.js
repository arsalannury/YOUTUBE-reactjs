import { useGroupOneDatas } from "../../Hooks/GroupOneDetail"


const GroupOnePage = ({groupOneIds}) => {

    const [FT_OBJ,SD_OBJ,TD_OBJ] = useGroupOneDatas(groupOneIds);
   
    if(FT_OBJ.isLoading) {
        return <h2>data is loading ...</h2>
    }
     

  return (
    <>
    
    </>
  )
}

export default GroupOnePage