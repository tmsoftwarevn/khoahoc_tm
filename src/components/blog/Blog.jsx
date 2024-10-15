import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useRouter } from "next/navigation";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment";

export default function Blog(props) {
  const { detail } = props;
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/tin-tuc/${detail.slug}`)}
      className="h-full"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={`${process.env.URL_BACKEND}/images/${detail?.thumbnail}`}
          alt="green iguana"
          className="h-[200px] object-cover"
        />
        <CardContent>
          <Typography
            gutterBottom
            component="span"
            className="!font-semibold h-[48px] text-md !capitalize line-clamp-2 leading-5"
          >
            {detail?.tieude}
          </Typography>
          <div className="flex mb-2 items-center text-sm">
            <FaCalendarAlt className="mr-2 text-orange-500" />
            <span> {moment(detail?.createdAt).format("DD-MM-Y")}</span>
          </div>
          <Typography
            variant="body2"
            color="text.secondary"
            className="line-clamp-3"
          >
            {detail?.mota_ngan}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" className="!text-orange-500">xem thêm</Button>
      </CardActions> */}
    </Card>
  );
}
