import CouponCard from "./CouponCard";
import Grid from "@mui/material/Grid";
export default function Coupons() {
  return (
    <>
      <Grid container mt={3} mb={5} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} md={8} 
          sx={{ display: "flex", justifyContent: "left", gap:'10px',flexWrap:'wrap' }}
        >
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
        </Grid>
      </Grid>
    </>
  );
}
