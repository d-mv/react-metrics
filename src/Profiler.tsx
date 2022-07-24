import {
  Profiler as ReactProfiler,
  ProfilerOnRenderCallback,
  PropsWithChildren,
} from 'react';

interface Interaction {
  __count: number;
  id: number;
  name: string;
  timestamp: number;
}

export interface ProfilerOnRenderArgs {
  id: string;
  phase: 'mount' | 'update';
  actualDuration: number;
  baseDuration: number;
  startTime: number;
  commitTime: number;
  interactions: Set<Interaction>;
}

interface ProfilerProps {
  renderId: string;
  onRender?: (args: ProfilerOnRenderArgs) => void;
}

export function Profiler({
  renderId,
  onRender,
  children,
}: PropsWithChildren<ProfilerProps>) {
  const handleOnRender: ProfilerOnRenderCallback = (
    id: string,
    phase: 'mount' | 'update',
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
    interactions: Set<Interaction>
  ) => {
    const renderArgs = {
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    };
    // eslint-disable-next-line no-console
    console.groupCollapsed(`profiler [ ${id} ] `);
    // eslint-disable-next-line no-console
    console.table(renderArgs);
    // eslint-disable-next-line no-console
    console.groupEnd();

    if (onRender) onRender(renderArgs);
  };

  return (
    <ReactProfiler id={renderId} onRender={handleOnRender}>
      {children}
    </ReactProfiler>
  );
}
