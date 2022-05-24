#datecell
=if(column(E4)=3,
   if($O3<>"",$O3+1,if((weekday(Date($A$1,$B4,1))=column(E4)-2),Date($A$1,$B4,1),"")),
   if(C4<>"",if(month(C4+1)=month(C4),C4+1,""),if(E3="",if((weekday(Date($A$1,$B4,1))=column(E4)-2),Date($A$1,$B4,1),""),"")
))

#monthcell
=text(date($A$1,$B3,1),"MMMM")

#lastweek_of_year
=if(column(E2)-2=weekday(Date($A$1-1,12,31)),Date($A$1-1,12,31),"")
