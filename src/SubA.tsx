import { useNavigate } from "react-router-dom";

export default function SubA() {
    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }
    return <div onClick={() => goBack()}>我是A子页面, 路径是: '/sub/a'</div>
}
