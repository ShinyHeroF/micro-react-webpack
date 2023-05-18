import { useNavigate } from "react-router-dom";

export default function SubB() {
    const navigate = useNavigate()

    function goBack() {
        navigate(-1);
    }
    return <div onClick={() => goBack()}>我是B子页面, 路径是: '/sub/b'</div>
}
