import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function StudentInfo() {
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="secondary" className="bg-blue-500 text-white">Thunwarat Srijandon</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-bold text-xl">ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div />
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
              src="./profile.png"
            />
            <CardHeader>
              <CardTitle>Thunwarat Srijandon</CardTitle>
              <CardDescription>
                นักศึกษาชั้นปีที่2 สาขาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่
              </CardDescription>
              <div className="flex w-full flex-wrap gap-2 mt-4">
                <div className="flex w-full flex-wrap gap-2">
                  <Badge>Hobbies</Badge> ฟังเพลง,ดูหนัง,เล่นเกม,เล่นกีฬา
                </div>
                <div className="flex w-full flex-wrap gap-2">
                  <Badge>Email</Badge> thunwarat_sr@cmu.ac.th
                </div>
                <div className="flex w-full flex-wrap gap-2">
                  <Badge>Social</Badge> IG: _ploythun
                </div>
              </div>

            </CardHeader>
            <CardFooter>
              <div >
                รหัสนักศึกษา: 680610683
              </div>
            </CardFooter>
          </Card>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
