import Zoom from 'react-medium-image-zoom'
import { useRouter } from 'next/router';
import SlideShow from "../components/Home/slideshow";

export default  function gallerie(params) {
    const router = useRouter();
    const navigateToProductDetail = (id) => {
        // Navigue vers la page ProductDetail avec l'ID du produit
        router.push(`/RealisationDetail?id=${id}`);
      };
    return(
        <div className="w-10/12 mx-auto">
            <h1 className="text-center text-4xl pb-10">Nos Réalisations</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/444899943_1179951306299636_883194859253706229_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=e-eb40XoxDYQ7kNvgE67e69&_nc_ht=scontent.ftun8-1.fna&oh=00_AYDwLYOnAKoXgS86zsu4EqQOe8DTOr3zlRDHj05ZnrXgjw&oe=66AD64BB" alt=""onClick={() => navigateToProductDetail(1)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/445412601_1179950882966345_3135230255086362736_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SS7CzJ4P9AUQ7kNvgHF7Avt&_nc_ht=scontent.ftun8-1.fna&oh=00_AYD3AfcCtQlBJwRXDVPUeomhuzxLBVorT5ghl6afbhSLUg&oe=66AD47E6" alt=""onClick={() => navigateToProductDetail(2)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/385092073_1034440597517375_1652258695510063931_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sgVmvuX730IQ7kNvgEvL0k_&_nc_ht=scontent.ftun8-1.fna&gid=AZwPNXSJ6RLpxQG2PBY-34z&oh=00_AYD3ItNcjn_wE9H3cqSU1qZVOP2bMvRpaDQ422PsCMDR_g&oe=66AD8CFA" alt=""onClick={() => navigateToProductDetail(3)}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/445197782_1179951242966309_2356432524149206033_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WfgkIHwoH3wQ7kNvgEFgR8E&_nc_ht=scontent.ftun8-1.fna&oh=00_AYDqMq83V1uCucHcR-oZZoImuBEd8PYRP3txKWq5-LXoeA&oe=66AD53D4" alt=""onClick={() => navigateToProductDetail(4)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/386520348_1034440390850729_1236369505440245761_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uioAEM-SXsIQ7kNvgENDhqm&_nc_ht=scontent.ftun8-1.fna&oh=00_AYDkZ9TK_1PVnSArMhhj_VKn3SaQoB9B7D-hiEf16Fjm8A&oe=66AD7467" alt=""onClick={() => navigateToProductDetail(5)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/291122058_721606925467412_817698869398861992_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BpDJ9cNZOU8Q7kNvgHPLfL0&_nc_ht=scontent.ftun8-1.fna&oh=00_AYC2IwtEgOKJO9xjmYOyw9uB7Agv1V1ZtE9FWo6fS_Nj_g&oe=66AD7ECB" alt=""onClick={() => navigateToProductDetail(6)}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/447671071_1179951326299634_6338166822520368700_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ibyj6Fb77zYQ7kNvgG41rbU&_nc_ht=scontent.ftun8-1.fna&oh=00_AYCMJpyTtYh86py0nRx0QfquXQNnOt_2RAIly7nyNUynQg&oe=66AD6861" alt=""onClick={() => navigateToProductDetail(7)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/387138033_1034440444184057_6073216325373916084_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ptX_YFfR0iEQ7kNvgFO64p6&_nc_ht=scontent.ftun8-1.fna&oh=00_AYBSPGvfHnSZZIe2SMcRxS-0YKFgea2v33pPkg9tBsSJAw&oe=66AD61AC" alt=""onClick={() => navigateToProductDetail(8)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/386638649_1034440700850698_1976454936184676784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AsWADp5LzwwQ7kNvgHZlsuI&_nc_ht=scontent.ftun8-1.fna&oh=00_AYA6sO_8KPEYRcbyBgAdHaqrywx5HdzOqzNepQbeYqdvMQ&oe=66AD6D5C" alt=""onClick={() => navigateToProductDetail(9)}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/386712717_1034440667517368_4085470575987918708_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=u-9UzefcNvUQ7kNvgEx2FQc&_nc_ht=scontent.ftun8-1.fna&gid=AB0_pAFBbHSBOCsNxOfBbmT&oh=00_AYB5jPSWwTNzHm-9n9FZlx6ymsxxA8gWI9p0mM8lELFX_w&oe=66AD6D57" alt=""onClick={() => navigateToProductDetail(10)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/386797234_1034440224184079_7375995904527552379_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=C29hFY2NT0YQ7kNvgHRUrka&_nc_ht=scontent.ftun8-1.fna&oh=00_AYB1t8t94JGQXZgSUzMC91I-W1rH08JaG_kN15MoPxmO2A&oe=66AD62EC" alt=""onClick={() => navigateToProductDetail(11)}/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/437857393_1148092766152157_7534753699101973583_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8O5VTmGXGegQ7kNvgE1dUM-&_nc_ht=scontent.ftun8-1.fna&oh=00_AYCvLpxmmm9fVHdzBi7o3x9AvrylqGmEyOR-qlmOgDhBwA&oe=66AD7149" alt=""onClick={() => navigateToProductDetail(12)}/>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
        <div className="grid gap-4 mt-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/387147306_1034440530850715_3983964098194952063_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=z8yT1NQQh7gQ7kNvgEqblI8&_nc_ht=scontent.ftun8-1.fna&oh=00_AYAwTcgFoILU9_Y80coK0ZMr6WoSFWZo5Ky1KQtiCmi4fg&oe=66AD79D5" alt=""onClick={() => navigateToProductDetail(1)}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/291923660_722887242006047_9137098084214683601_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=CIUsu2BhTpcQ7kNvgGn0y8Z&_nc_ht=scontent.ftun8-1.fna&oh=00_AYCoezvHM0eefzOuDsSSw-BO5D6BGttXoxjYkCr7DbX08g&oe=66AD7AD1" alt=""onClick={() => navigateToProductDetail(1)}/>
                </div>
            </div>
        </div>
        <SlideShow></SlideShow>
        </div>
        
    )
}
