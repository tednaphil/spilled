import { useEffect, useState } from "react";
import { TeaHardcoded, allHardcodedTeas } from "../../utils/interface";
import TeaArticle from "../teaArticle/TeaArticle";
import { useParams, useNavigate } from "react-router-dom";

function TeaEd() {
  const category = useParams<string>().category;
  const [targetTea, setTargetTea] = useState<TeaHardcoded[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const filteredTeaData = allHardcodedTeas?.filter(
      (tea: TeaHardcoded) => tea.type === category
    );
    !filteredTeaData.length
      ? navigate("*", { replace: true })
      : setTargetTea(filteredTeaData);
  }, [category, navigate]);

  const teaArticle = targetTea?.map((tea: TeaHardcoded) => {
    return <TeaArticle slug={tea.type} tea={tea} key={Date.now()} />;
  });

  return <>{teaArticle}</>;
}

export default TeaEd;
