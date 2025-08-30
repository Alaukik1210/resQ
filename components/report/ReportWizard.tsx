'use client'
import { useState } from "react"
import { ReportForm } from "./Reportform";
import { ReportSubmitted } from "./ReportFormCompleted";

interface ReportData {
  reportId: string;
  type: "EMERGENCY" | "NON_EMERGENCY";
  specificType: string;
  title: string;
  description: string;
  location: string;
  latitude: number | null;
  longitude: number | null;
  image: string | null;
  status: string;
}

export function ReportWizard(){
    const [currentStep, setCurrentStep] = useState(1);
    const [reportData,setReportData] = useState(null);

    const handleStepComplete = async (data:ReportData) =>{
        setReportData({...reportData,...data});

        if(currentStep === 3){
            return ;
        }
        setCurrentStep((prev)=>prev+1);

        
    }
    return(
        <div className="rounded-2xl bg-zinc-900 p-8">
            {currentStep===1 && <ReportForm onComplete={handleStepComplete}/>}
            {currentStep===2 && (<ReportSubmitted data={reportData} onComplete={handleStepComplete}/>)}
        </div>
    )
}