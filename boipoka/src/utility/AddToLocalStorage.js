import Aleart from "../components/Aleart/Aleart";

export const getLocalData = ()=>{
    const storedData = localStorage.getItem("markBooks");
    if(storedData) {
        return JSON.parse(storedData);
    }
    else {
        return [];
    }
}

export const addLocalData = (id) => {
    const storedData = getLocalData();

    if(storedData.includes(id)){
        alert("Already exist in the Read List!")
    }
    else {
        storedData.push(id);
        localStorage.setItem("markBooks" , JSON.stringify(storedData));
    }
}
